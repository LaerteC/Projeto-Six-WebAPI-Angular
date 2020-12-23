using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;


        public ClienteController(IConfiguration configuration,IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;

        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select id,Nome,SobreNome,Cnpj,RazaoSocial,NomeFantasia,Email,Telefone,
                            convert(varchar(12),Data,120) as Datas,FotoArquivo
                            from dbo.Cliente
                        ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClienteAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Cliente cli)
        {
            string query = @" insert into dbo.Cliente 
                        (Nome,SobreNome,Cnpj,RazaoSocial,NomeFantasia,Email,Telefone,Data,FotoArquivo)
                         values 
                            (
                                '" + cli.Nome + @"'
                                ,'" + cli.SobreNome + @"'
                                ,'" + cli.Cnpj + @"'
                                ,'" + cli.RazaoSocial + @"'
                                ,'" + cli.NomeFantasia + @"'
                                ,'" + cli.Email + @"'
                                ,'" + cli.Telefone + @"'
                                ,'" + cli.Datas + @"'
                                ,'" + cli.FotoArquivo + @"'
                                
                              )
                          ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClienteAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(" Adicionado com Sucesso");
        }

        [HttpPut]
        public JsonResult Put(Cliente cli)
        {
            string query = @"
                update dbo.Cliente set 
                Nome = '" + cli.Nome + @"'
                ,SobreNome = '" + cli.SobreNome + @"'
                ,Cnpj = '" + cli.Cnpj+ @"'
                ,RazaoSocial= '" + cli.RazaoSocial + @"'
                ,NomeFantasia = '" + cli.NomeFantasia+ @"'
                ,Email = '" + cli.Email + @"'
                ,Telefone = '" + cli.Telefone + @"'
                ,Data = '" + cli.Datas + @"'
                where Id = " + cli.Id + @"
                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClienteAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(" Atualizado com Sucesso !!!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int Id)
        {
            string query = @"
                delete from dbo.Cliente     
                where Id = " + Id + @"
                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClienteAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(" Deletado com Sucesso !!! ");
        }

        [Route ("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Fotos" + filename;

                using (var stream =new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);

                }
                return new JsonResult(filename);
            }
            catch (Exception )
            {
                return new JsonResult("anoniii.png");
            }
        }
            
        [Route("GetAllFuncionariosNomes")]
        public JsonResult GetAllFuncionariosNomes()
        {

            string query = @"
                            select NomeFuncionario from dbo.Funcionario
                        ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ClienteAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(table);
        }

    

    }
}
