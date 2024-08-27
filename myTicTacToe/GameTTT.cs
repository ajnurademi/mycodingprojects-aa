using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TicTacToe
{
    // TTT-Spiel (TicTacToe) 
    // Made by Ajnur 
    // 03.02.2023

    public partial class GameTTT : Form
    {
        public int spieler = 2;
        public int zug = 9;
        public int s1 = 0;
        public int s2 = 0;
        public int sd = 0;

        // Unentschieden 
        bool IsDraw()
        {
            if ((zug == 9) && (IsWinner() == false))
            { return true; }
            else
            { return false; }
        }

        // Gewinner
        bool IsWinner()
        {
            // Horizontal
            if ((A00.Text == A01.Text) && (A01.Text == A02.Text) && A00.Text != "")
            { return true; }
            if ((A10.Text == A11.Text) && (A11.Text == A12.Text) && A10.Text != "")
            { return true; }
            if ((A20.Text == A21.Text) && (A21.Text == A22.Text) && A20.Text != "")
            { return true; }

            // Vertikal
            if ((A00.Text == A10.Text) && (A10.Text == A20.Text) && A00.Text != "")
            { return true; }
            if ((A01.Text == A11.Text) && (A11.Text == A21.Text) && A01.Text != "")
            { return true; }
            if ((A02.Text == A12.Text) && (A12.Text == A22.Text) && A02.Text != "")
            { return true; }

            // Diagonal 
            if ((A00.Text == A11.Text) && (A11.Text == A22.Text) && A00.Text != "")
            { return true; }
            if ((A02.Text == A11.Text) && (A11.Text == A20.Text) && A02.Text != "")
            { return true; }
            else
            { return false; }
        }

        // Methode für neues Spiel 
        public void NeuesSpiel()
        {
            spieler = 2;
            zug = 0;
            A00.Text = A01.Text = A02.Text = A10.Text = A11.Text = A12.Text = A20.Text = A21.Text = A22.Text = "";

            lbl_x.Text = "X: " + s1;
            lbl_y.Text = "Y: " + s2;
            lbl_dr.Text = "Draw: " + sd;
        }

        public GameTTT()
        {
            InitializeComponent();
        }

        // Labels 
        private void Form1_Load(object sender, EventArgs e)
        {
            lbl_x.Text = "X: " + s1;
            lbl_y.Text = "Y: " + s1;
            lbl_dr.Text = "Draw: " + s1;
        }

        // Die Züge + Eingabe
        private void buttonClick(object sender, EventArgs e)
        {
            Button button = (Button) sender; 
            
            if (button.Text == "")
            {
                if (spieler % 2 == 0)
                {
                    button.Text = "X";
                    spieler++;
                    zug++;
                }
                else
                {
                    button.Text = "O";
                    spieler++; 
                    zug++;
                }

                if (IsDraw() == true)
                {
                    MessageBox.Show("Unentschieden");
                    sd++;
                    NeuesSpiel();
                }

                if (IsWinner() == true)
                {
                    if (button.Text == "X")
                    {
                        MessageBox.Show("Spieler 1 hat gewonnen");
                        s1++;
                        NeuesSpiel();
                    }
                    else
                    {
                        MessageBox.Show("Spieler 2 hat gewonnen");
                        s2++;
                        NeuesSpiel();
                    }
                }
            }

        }

        //Das Spiel wir neu  gespielt
        private void bttn_ns_Click(object sender, EventArgs e)
        {
            NeuesSpiel();
        }

        // Spiel zurücksetzten
        private void bttn_reset_Click(object sender, EventArgs e)
        {
            s1 = s2 = sd = 0;
            NeuesSpiel();
        }

        // Spiel beenden 
        private void bttn_beenden_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
