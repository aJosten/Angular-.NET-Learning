using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _7172021.Models
{
    /// <summary>
    /// Represents a player (who plays a faction/side in game)
    /// Contains an ID and Name
    /// </summary>
    public class Faction
    {
        /// <summary>
        /// The  unique ID for a faction
        /// </summary>
        public int FactionID { get; set; }
        /// <summary>
        /// The Faction's name (varchar(70) in the database)
        /// </summary>
        public String FactionName { get; set; }
    }
}
