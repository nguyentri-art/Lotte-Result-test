using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LayKQXS
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            dateTimePicker1.Format = DateTimePickerFormat.Custom;
            dateTimePicker1.CustomFormat = "dd-MM-yyyy";
        }

        private void btnXem_Click(object sender, EventArgs e)
        {
            var url = $"https://www.minhngoc.com.vn/ket-qua-xo-so/{dateTimePicker1.Text}.html";
            var data = new MinhNgocHelper().GetKQXS(url);
            dataGridView1.DataSource = data;
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }
    }
}
