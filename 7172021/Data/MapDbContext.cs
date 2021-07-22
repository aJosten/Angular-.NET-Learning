using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _7172021.Models;

namespace _7172021.Data
{
    /// <summary>
    /// This DbContext is used for the MapData database that was constructed via a short script.
    /// </summary>
    public class MapDbContext : DbContext
    {
        public MapDbContext(DbContextOptions<MapDbContext> options)
            : base(options)
        {
             

        }
        public DbSet<Territory> Territory { get; set; }
        public DbSet<Faction> Faction { get; set; }


    }
}
