using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _7172021.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int TerrID { get; set; }
        public String TerrName  { get; set; }
        public int OwnerID { get; set; }
    }
}
