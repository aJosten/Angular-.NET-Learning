using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace _7172021.Models
{
    /// <summary>
    /// Represents a territory's info: ID, name, and ownerID
    /// </summary>
    public class Territory
    {
        /// <summary>
        /// Unique ID
        /// </summary>
        /// 
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TerrID { get; set; }
        /// <summary>
        /// The territory name (varchar(40) in the database)
        /// </summary>
        public String TerrName { get; set; }
        /// <summary>
        /// Foreign key, refers to FactionID in Factions table
        /// </summary>
        public int OwnerID { get; set; }
    }
}
