using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
namespace APILayer.Controllers
{

    public class ChildrenController : ApiController
    {
        [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]

        [HttpGet]
        // GET api/<controller>
        public IEnumerable<ChildDTO> Get()
        {
            return ChildBL.GetChildren();
        }

        [HttpGet]
        // GET api/<controller>/5
        public ChildDTO Get(int id)
        {
            return ChildBL.GetChild(id);
        }
        [HttpPost]
        // POST api/<controller>
        public void Post([FromBody] ChildDTO child)
        {
            ChildBL.AddChild(child);
        }

        //[HttpPut]
        ////// PUT api/<controller>/5
        //public void Put(int id, [FromBody]UserDTO user)
        //{
        //    UserBL.UpdateUser(id, user);

        //}
    }
}
