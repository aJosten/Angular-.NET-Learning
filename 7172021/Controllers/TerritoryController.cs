using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _7172021.Data;
using _7172021.Models;
using System.Net.Http;
using System.Net;
using System.Text.Json;
using System.ComponentModel;

namespace _7172021.Controllers
{
    /// <summary>
    /// Controller for the Territory model.
    /// </summary>
    [Route("[controller]")]
    [ApiController]
    public class TerritoryController : ControllerBase
    {
        private readonly MapDbContext _context;

        /// <summary>
        /// Dependency Injection
        /// </summary>
        /// <param name="context">in this, a MapDbContext DbContext</param>
        public TerritoryController(MapDbContext context) {
            _context = context;
        }

        /// <summary>
        /// GETs the entire Territory Table
        ///  /[Territory]
        /// </summary>
        /// <returns>IEnumerable<Territory> array</Territory></returns>
        [HttpGet]
        public IEnumerable<Territory> Get()
        {
            var terr = (from s in _context.Territory select s).ToArray();
            return terr;
        }

        /// <summary>
        /// GETs the Territory by ID
        /// </summary>
        /// <param name="id">The ID number of the desired territory</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Territory Get(int id)
        {
            var terr = _context.Territory.First(s => s.TerrID == id);
            return terr;
        }

        /// <summary>
        /// POSTs to /Territory
        /// 
        /// BUG: Currently cannot convert from JSON to Int32 on ownerID.
        /// Functions appropriately in Postman so will fix later.
        /// 
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public string Post([FromBody] Territory value)
        {
            try
            {
                _context.Territory.Add(value);
                _context.SaveChanges();

                return "Posted";                
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }

        }

        // PUT <TerritoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE TerritoryController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            if (id <= 0)
                return "Cannot delete at id " + id;

            try
            {
                var territory = _context.Territory
                    .Where(s => s.TerrID == id)
                    .FirstOrDefault();

                _context.Territory.Remove(territory);
                _context.SaveChanges();  
                return "Deleted territory " + id;
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }

            
        }
    }
}
