using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Pais
    {
        [Key][DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Zip { get; set; }
        public string Nombre { get; set; }
    }
}