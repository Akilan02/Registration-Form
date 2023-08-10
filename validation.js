function validate()
        {
            var fn,sn,em,pw,fl=0;
            fn=document.getElementById("fname").value;
            sn=document.getElementById("sname").value;
            em=document.getElementById("email").value;
            pw=document.getElementById("pwd").value;
            if(!fn)
            {
                document.write("<br>Please enter your First name")
            }
            if(!sn)
            {
                document.write("<br>Please enter your Last name")
            }
            for (let i = 0; i < em.length; i++) 
            {
                if(em[i]=="@")
                {
                    fl=1
                }
            }
            if(fl==0)
            {
                document.write("<br>Your email ID is not valid");
            }
            if(pw.length<8)
            {
                document.write("<br>Your password is not strong");
            }
        }