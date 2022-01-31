export interface User {
//   public string UserName { get; set; }
// public string Password{get;set;}
// public string Email { get; set; }
// public string FirstName { get; set; }
// public string LastName { get; set; }
  Id:string,
  UserName:string,
  Password:string,
  Email:string,
  FirstName:string,
  LastName:string,
  token?:string;

}
