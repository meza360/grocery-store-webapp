using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Core
{
    public class AppException
    {
        public AppException(int status, string message, string details = null) 
        {
            this.Status = status;
            this.Message = message;
            this.Details = details;
        }
        public int Status { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}