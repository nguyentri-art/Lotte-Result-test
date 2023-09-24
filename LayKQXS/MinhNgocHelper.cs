using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace LayKQXS
{
    class MinhNgocHelper
    {
        public DataTable GetKQXS(string url)
        {            // url = "https://www.minhngoc.com.vn/ket-qua-xo-so/28-02-2021.html";
            var web = new HtmlWeb();
            var doc = web.Load(url);

            List<string> listData = new List<string>();

            var data = doc.DocumentNode.SelectNodes("//table[contains(@class,'bkqmiennam')]");

            foreach (var table_miennam in data)
            {
                doc.LoadHtml(table_miennam.InnerHtml);
                var data2 = doc.DocumentNode.SelectNodes("//table//tbody//tr");

                var rows = data2.Select(tr => tr
                    .Elements("td")
                    .Select(td => System.Net.WebUtility.HtmlDecode(td.InnerHtml).Trim())
                    .ToArray());
                foreach (var row in rows)
                {
                    var temp = HtmlToPlainText(row[0].Replace("<div>", "").Replace("</div>", "-").Trim());
                    var text = string.Join(" - ", temp.Split('-').Where(x => !string.IsNullOrEmpty(x)).ToArray());
                    listData.Add(text);
                }
                break;
            }

            var listOfLists = new List<IEnumerable<string>>();
            for (int i = 0; i < listData.Count(); i += 11)
            {
                listOfLists.Add(listData.Skip(i).Take(11));
            }
            var table = new DataTable();
            foreach (var item in listOfLists)
            {
                table.Columns.Add(item.ToList().FirstOrDefault());
            }

            for (int i = 1; i < 11; i++)
            {
                var dr = table.NewRow();
                int j = 0;
                foreach (var item in listOfLists)
                {
                    dr[j] = item.ToArray()[i];
                    j++;
                }
                table.Rows.Add(dr);

            }
            return table;
        }



    
        private static string HtmlToPlainText(string html)
        {
            const string tagWhiteSpace = @"(>|$)(\W|\n|\r)+<";
            const string stripFormatting = @"<[^>]*(>|$)";
            const string lineBreak = @"<(br|BR)\s{0,1}\/{0,1}>";
            var lineBreakRegex = new Regex(lineBreak, RegexOptions.Multiline);
            var stripFormattingRegex = new Regex(stripFormatting, RegexOptions.Multiline);
            var tagWhiteSpaceRegex = new Regex(tagWhiteSpace, RegexOptions.Multiline);

            var text = html;            
            text = System.Net.WebUtility.HtmlDecode(text);           
            text = tagWhiteSpaceRegex.Replace(text, "><");            
            text = lineBreakRegex.Replace(text, Environment.NewLine);           
            text = stripFormattingRegex.Replace(text, string.Empty);

            return text;
        }
    }
}
