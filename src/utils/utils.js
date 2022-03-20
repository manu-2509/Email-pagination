const transporter=require('../configs/mail')

const sendmail = async(user)=>{
       await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: user.email,
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
        text: "Hello world?", // plain text body
        html: `Hi ${user.first_name}, Please confirm your email address`
      });
    
    
}

const admin=["manesh_fw14_451@masai.school","manesh2509@gmail.com","abc@gmail.com","bac@gmail.com","ccc@gmail.com"]


const adminMail = async (user) => {
    for(var i=0;i<admin.length;i++){
        await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', 
            to: admin[i],
            subject: `${user.first_name} has registered with us`,
            text: `Please welcome ${user.first_name}`
        });
    }
}

module.exports={sendmail,adminMail}