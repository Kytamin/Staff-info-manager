
enum Gender {
    MALE,
    FEMALE,
    OHTER

}


class Staff{
    fullname:string=""
    gender:Gender
    birthday?: Date
    email:string=""
    phoneNumber:string=""
    constructor(fullname:string,gender:Gender,birthday:Date,email:string,phoneNumber:string) {
        this.fullname=fullname
        this.gender=gender
        this.birthday=birthday
        this.email=email
        this.phoneNumber=phoneNumber
    }
}
let staffList:Staff[]=[]

staffList.push(new Staff("NHK",Gender.MALE,new Date("23-12-1997"),"nhk23121997@gmail.com","0123456789" ))
staffList.push(new Staff("NKL",Gender.FEMALE,new Date("7-10-2001"),"nkl7102001@gmail.com","987654321" ))
staffList.push(new Staff("NHD",Gender.MALE,new Date("22-2-2222"),"nhd23121997@gmail.com","123459876" ))


function displaystaff(staff:Staff){
    console.log(staff)
}
staffList.forEach(displaystaff)