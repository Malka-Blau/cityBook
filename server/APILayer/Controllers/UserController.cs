using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;

namespace APILayer.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs

    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        // GET api/<controller>
        public IEnumerable<UserDTO> Get()
        {
            return UserBL.GetUsers();
        }

        [HttpGet]
        // GET api/<controller>/5
        public UserDTO Get(int id)
        {
            return UserBL.GetUser(id);
        }
        [HttpPost]
       // POST api/<controller>
        public void Post([FromBody] UserDTO user)
        {
            UserBL.AddUser(user);
        }

        [HttpPut]
        //// PUT api/<controller>/5
        public void Put(int id, [FromBody]UserDTO user)
       {
            UserBL.UpdateUser(id, user);
       }

        //// DELETE api/<controller>/5
        //public void Delete(int id)
        //{
        //}
    }
}
