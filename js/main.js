/*
    Creado por Javier Eduardo Arevalo Cardenas
    Email: javieduard02a@gmail.com
    Email MinTic: javier.arevalo.mt@correo.usa.edu.co
*/ 

var clients = document.getElementById("clients")
var doctors = document.getElementById("doctors")
var messages = document.getElementById("messages")
var menu = document.getElementById("menu")
var buttonAddSpecialty = document.getElementById("buttonAddSpecialty")
var buttonAddReservation = document.getElementById("buttonAddReservation")
var specialties =  document.getElementById("specialties")
var reservations= document.getElementById("reservations")
var editFormClient = document.getElementById("editFormClient")
var createFormClient = document.getElementById("createFormClient")
var editFormMessage = document.getElementById("editFormMessage")
var createFormMessage = document.getElementById("createFormMessage")
var createFormDoctor = document.getElementById("createFormDoctor")
var editFormDoctor = document.getElementById("editFormDoctor")
var buttonAddClient = document.getElementById("buttonAddClient")
var buttonAddDoctor = document.getElementById("buttonAddDoctor")
var createFormSpecialty = document.getElementById("createFormSpecialty")
var createFormReservation = document.getElementById("createFormReservation")
var administrator = document.getElementById("administrator")
var buttonAddAdministrator = document.getElementById("buttonAddAdministrator")
var scores = document.getElementById("scores")
var buttonAddScore = document.getElementById("buttonAddScore")
var createFormAdmin = document.getElementById("createFormAdmin")
var createFormScore = document.getElementById("createFormScore")

let myTableAdministrator=""
let myTableReservation=""
let myTableClients = ""
let myTableDoctors = ""
let myTableMessages = ""
var selectIdClient = 0
var selectIdDoctor = 0
var selectIdMessage = 0
var selectIdSpecialty = 0
var selectIdReservation = 0
var selectIdAdministrator = 0

function clientsCRUD(){
    scores.style.display ='none'
    administrator.style.display ='none'
    createFormClient.style.display ='none'
    editFormClient.style.display = 'none'
    doctors.style.display = 'none'
    messages.style.display = 'none'
    clients.style.display = 'block'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display='none'
    getClients();
}

function administratorCRUD(){
    scores.style.display = 'none'
    createFormAdmin.style.display='none'
    administrator.style.display ='block'
    createFormClient.style.display ='none'
    editFormClient.style.display = 'none'
    doctors.style.display = 'none'
    messages.style.display = 'none'
    clients.style.display = 'none'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display ='none'
    getAdministrators();

}

function scoreCRUD(){
    createFormScore.style.display='none'
    scores.style.display ='block'
    administrator.style.display='none'
    createFormClient.style.display='none'
    editFormClient.style.display = 'none'
    doctors.style.display = 'none'
    messages.style.display = 'none'
    clients.style.display = 'none'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display='none'
    getScores();

}

function doctorCRUD(){
    scores.style.display ='none'
    administrator.style.display='none'
    editFormDoctor.style.display='none'
    createFormDoctor.style.display = 'none'
    clients.style.display = 'none'
    messages.style.display = 'none'
    doctors.style.display = 'block'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display='none'
    getDoctors();
}

function messageCRUD(){
    scores.style.display ='none'
    administrator.style.display='none'
    editFormMessage.style.display='none'
    createFormMessage.style.display = 'none'
    doctors.style.display = 'none'
    clients.style.display = 'none'
    messages.style.display = 'block'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display='none'
    getMessage();
}

function reservationCRUD(){
    scores.style.display ='none'
    administrator.style.display='none'
    createFormReservation.style.display='none'
    doctors.style.display = 'none'
    clients.style.display = 'none'
    messages.style.display = 'none'
    menu.style.display = 'none'
    specialties.style.display = 'none'
    reservations.style.display='block'
    getReservation();
}

function specialtyCRUD(){
    scores.style.display ='none'
    administrator.style.display='none'
    createFormSpecialty.style.display = 'none'
    reservations.style.display='none'
    doctors.style.display = 'none'
    clients.style.display = 'none'
    messages.style.display = 'none'
    menu.style.display = 'none'
    specialties.style.display = 'block'
    getSpecialty();
}

function  returnMenu(){
    scores.style.display ='none'
    administrator.style.display='none'
    reservations.style.display='none'
    specialties.style.display = 'none'
    buttonAddReservation.style.display='none'
    buttonAddClient.style.display='none'
    createFormClient.style.display='none'
    editFormClient.style.display = 'none'
    doctors.style.display = 'none'
    clients.style.display = 'none'
    messages.style.display = 'none'
    menu.style.display = 'block'
    $("#newStartReservation").val("");
    $("#newDevolutionReservation").val("");
    $("#newDoctorReservation").val("");
    $("#newClientReservation").val("");
    $("#newNameSpecialty").val("");
    $("#newDescriptionSpecialty").val("");
    $("#newIdMessageDoctor").val("");
    $("#newIdMessageClient").val("");
    $("#newMessage").val("");
    $("#newDescription").val("");
    $("#newNameDoctor").val("");
    $("#newSpecialtyDoctor").val("");
    $("#newGraduateDoctor").val("");
    $("#newDepartmentDoctor").val("");
    $("#newPassClient").val("");
    $("#newNameClient").val("");
    $("#newEmailClient").val("");
    $("#newAgeClient").val("");
}

function getScores(){
    $("#TableScore").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        url:"http://129.151.101.52:8081/api/Score/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            buttonAddScore.style.display='block';
            showResponseScore(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getAdministrators(){
    $("#TableAdministrator").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        url:"http://129.151.101.52:8081/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            buttonAddAdministrator.style.display='block';
            showResponseAdministrator(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getSpecialty(){
    $("#TableSpecialty").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        url:"http://129.151.101.52:8081/api/Specialty/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            buttonAddSpecialty.style.display='block';
            showResponseSpecialty(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getReservation(){
    $("#TableReservation").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        url:"http://129.151.101.52:8081/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            buttonAddReservation.style.display='block'
            showResponseReservation(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getMessage(){
    $("#TableMessage").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        url:"http://129.151.101.52:8081/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //console.log(response)
            buttonAddMessage.style.display='block';
            showResponseMessage(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getDoctors(){
    $("#TableDoctors").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        url:"http://129.151.101.52:8081/api/Doctor/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //console.log(response)
            buttonAddDoctor.style.display='block';
            showResponseDoctors(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                ////console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function getClients(){
    $("#TableClients").remove();
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        url:"http://129.151.101.52:8081/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            console.log(response)
            buttonAddClient.style.display='block';
            showResponseClients(response);
        },
        error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(error.code)
                swal("ERROR","Connection error",'error')
                    .then(()=>{
                        //console.log("ERROR")
                    })
            }
    });
}

function showResponseAdministrator(items){
    myTableAdministrator='<table id="TableAdministrator"><tr><td>ID</td><td>NAME</td><td>EMAIL</td><td>ACTION</td></tr>';
    for(i=0; i <items.length ; i++){
        myTableAdministrator += "<tr>";
        myTableAdministrator += "<td>"+items[i].id+"</td>";
        myTableAdministrator += "<td>"+items[i].name+"</td>";
        myTableAdministrator += "<td>"+items[i].email+"</td>";
        //myTableAdministrator += '<td><button onclick="editAdministrator('+items[i].id+')"class="Editbutton">Edit</button><button onclick="deleteAdministrator('+items[i].id+')"class="Editbutton">Delete</button></td>';
        myTableAdministrator += '<td><button onclick="deleteAdministrator('+items[i].id+')"class="Editbutton">Delete</button></td>';
        myTableAdministrator += "<tr>";
    }
    myTableAdministrator += "</table>";
    $("#tableAdministrator").append(myTableAdministrator);
}

function showResponseScore(items){
    myTableScore='<table id="TableScore"><tr><td>ID</td><td>SCORE</td><td>COMMENT</td><td>ID RESERVATION</td></tr>';
    let Doctor = { name:''}
    let Client = { name:''}
    for(i=0; i <items.length ; i++){
        Reservation=items[i].reservation;
        myTableScore += "<tr>";
        myTableScore += "<td>"+items[i].id+"</td>";
        myTableScore += "<td>"+items[i].score+"</td>";
        myTableScore += "<td>"+items[i].comment+"</td>";
        myTableScore += "<td>"+Reservation.idReservation+"</td>";
        //myTableMessages += '<td><button onclick="editMessage('+items[i].id+')"class="Editbutton">Edit</button><button onclick="deleteMessage('+items[i].id+')"class="Editbutton">Delete</button></td>';
        myTableScore += "<tr>";
    }
    myTableScore += "</table>";
    $("#tableScore").append(myTableScore);
}

function showResponseReservation(items){
    myTableReservation='<table id="TableReservation"><tr><td>ID</td><td>START</td><td>DEVOLUTION</td><td>STATUS</td><td>DOCTOR</td><td>CLIENT</td><td>SCORE</td><td>ACTION</td></tr>';
    let Doctor = { name:''}
    let Client = { name:''}
    for(i=0; i <items.length ; i++){
        Doctor=items[i].doctor;
        Client=items[i].client;
        myTableReservation += "<tr>";
        myTableReservation += "<td>"+items[i].idReservation+"</td>";
        myTableReservation += "<td>"+items[i].startDate+"</td>";
        myTableReservation += "<td>"+items[i].devolutionDate+"</td>";
        myTableReservation += "<td>"+items[i].status+"</td>";
        myTableReservation += "<td>"+Doctor.name+"</td>";
        myTableReservation += "<td>"+Client.name+"</td>";
        myTableReservation += "<td>"+items[i].score+"</td>";
        //myTableReservation += '<td><button onclick="editReservation('+items[i].idReservation+')"class="Editbutton">Edit</button><button onclick="deleteReservation('+items[i].idReservation+')"class="Editbutton">Delete</button></td>';
        myTableReservation += '<td><button onclick="deleteReservation('+items[i].idReservation+')"class="Editbutton">Delete</button></td>';

        myTableReservation += "<tr>";
    }
    myTableReservation += "</table>";
    $("#tableReservation").append(myTableReservation);
}


function showResponseSpecialty(items){
    myTableSpecialty='<table id="TableSpecialty"><tr><td>ID</td><td>NAME</td><td>DESCRIPTION</td><td>ACTION</td></tr>';

    for(i=0; i <items.length ; i++){
 
        myTableSpecialty += "<tr>";
        myTableSpecialty += "<td>"+items[i].id+"</td>";
        myTableSpecialty += "<td>"+items[i].name+"</td>";
        myTableSpecialty += "<td>"+items[i].description+"</td>";
        //myTableSpecialty += '<td><button onclick="editSpecialty('+items[i].id+')"class="Editbutton">Edit</button><button onclick="deleteSpecialty('+items[i].id+')"class="Editbutton">Delete</button></td>';
        myTableSpecialty += '<td><button onclick="deleteSpecialty('+items[i].id+')"class="Editbutton">Delete</button></td>';

        myTableSpecialty += "<tr>";
    }
    myTableSpecialty += "</table>";
    $("#tableSpecialty").append(myTableSpecialty);
}


function showResponseMessage(items){
    myTableMessages='<table id="TableMessage"><tr><td>ID</td><td>MESSAGE</td><td>DOCTOR</td><td>CLIENT</td><td>ACTION</td></tr>';
    var Doctor= ''
    var Client = ''
    for(i=0; i <items.length ; i++){
        Doctor=items[i].doctor;
        Client=items[i].client;
        myTableMessages += "<tr>";
        myTableMessages += "<td>"+items[i].idMessage+"</td>";
        myTableMessages += "<td>"+items[i].messageText+"</td>";
        myTableMessages += "<td>"+Doctor.name+"</td>";
        myTableMessages += "<td>"+Client.name+"</td>";
        myTableMessages += '<td><button onclick="editMessage('+items[i].idMessage+')"class="Editbutton">Edit</button><button onclick="deleteMessage('+items[i].idMessage+')"class="Editbutton">Delete</button></td>';
        myTableMessages += "<tr>";
    }
    myTableMessages += "</table>";
    $("#tableMessage").append(myTableMessages);
}

function showResponseDoctors(items){
    //console.log(items)
    var Specialty =''
    //myTableDoctors='<table id="TableDoctors"><tr><td>ID</td><td>NAME</td><td>SPECIALTY</td><td>GRADUATE YEAR</td><td>DEPARTMENT</td><td>ACCION</td></tr>';
    myTableDoctors='<table id="TableDoctors"><tr><td>ID</td><td>NAME</td><td>SPECIALTY</td><td>GRADUATE YEAR</td><td>DEPARTMENT</td><td>DESCRIPTION</td><td>ACTION</td></tr>';
    for(i=0; i <items.length ; i++){
        Specialty=items[i].specialty
        myTableDoctors += "<tr>";
        myTableDoctors += "<td>"+items[i].id+"</td>";
        myTableDoctors += "<td>"+items[i].name+"</td>";
        myTableDoctors += "<td>"+Specialty.name+"</td>";
        myTableDoctors += "<td>"+items[i].year+"</td>";
        myTableDoctors += "<td>"+items[i].department+"</td>";
        myTableDoctors += "<td>"+items[i].description+"</td>";
        myTableDoctors += '<td><button onclick="editDoctor('+items[i].id+')"class="Editbutton">Edit</button><button onclick="deleteDoctor('+items[i].id+')"class="Editbutton">Delete</button></td>';
        myTableDoctors += "<tr>";
    }
    myTableDoctors += "</table>";
    $("#tableDoctors").append(myTableDoctors);
}

function showResponseClients(items){
    myTableClients='<table id="TableClients"><tr><td>ID</td><td>NAME</td><td>EMAIL</td><td>AGE</td><td>ACTION</td></tr>';
    for(i=0; i <items.length ; i++){
        myTableClients += "<tr>";
        myTableClients += "<td>"+items[i].idClient+"</td>";
        myTableClients += "<td>"+items[i].name+"</td>";
        myTableClients += "<td>"+items[i].email+"</td>";
        myTableClients += "<td>"+items[i].age+"</td>";
        myTableClients += '<td><button onclick="editClient('+items[i].idClient+')"class="Editbutton">Edit</button><button onclick="deleteClient('+items[i].idClient+')"class="Editbutton">Delete</button></td>';
        myTableClients += "<tr>";
    }
    myTableClients += "</table>";
    $("#tableClients").append(myTableClients);
}

formCreate.addEventListener("submit", e=>{
    e.preventDefault()
    if( newPassClient.value.length > 0 && newNameClient.value.length > 1 && newEmailClient.value.length>1 && newAgeClient.value>0){
        let dataCreate ={
            name:newNameClient.value,
            email:newEmailClient.value,
            age:parseInt(newAgeClient.value,10),
            password:newPassClient.value
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Client/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","User "+newNameClient.value+" created",'success')
                    .then(()=>{
                        $("#newPassClient").val("");
                        $("#newNameClient").val("");
                        $("#newEmailClient").val("");
                        $("#newAgeClient").val("");
                        clientsCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR",error.cause,'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateDoctor.addEventListener("submit", e=>{
    e.preventDefault()
    if( newDescription.value.length > 0 && newNameDoctor.value.length > 1 && newSpecialtyDoctor.value > 0 && newGraduateDoctor.value>0){
        
        let Specialty={
            id:parseInt(newSpecialtyDoctor.value,10),
        }
        let dataCreate ={
            name:newNameDoctor.value,
            specialty:Specialty,
            /*graduate_year:parseInt(newGraduateDoctor.value,10),
            department_id:parseInt(newDepartmentDoctor.value,10)*/
            year:parseInt(newGraduateDoctor.value,10),
            department:newDepartmentDoctor.value,
            description:newDescription.value
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        //console.log(dataCreateJson);
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Doctor/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Doctor "+newNameDoctor.value+" created",'success')
                    .then(()=>{
                        $("#newDescription").val("");
                        $("#newNameDoctor").val("");
                        $("#newSpecialtyDoctor").val("");
                        $("#newGraduateDoctor").val("");
                        $("#newDepartmentDoctor").val("");
                        doctorCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR",error.cause,'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateMessage.addEventListener("submit", e=>{
    e.preventDefault()
    if( newIdMessageDoctor.value > 0 && newMessage.value.length > 1 && newIdMessageClient.value>0){
        let Doctor ={
            id:parseInt(newIdMessageDoctor.value,10)
        }
        let Client={
            idClient:parseInt(newIdMessageClient.value,10)
        }

        let dataCreate ={
            doctor:Doctor,
            client:Client,
            messageText:newMessage.value  
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            url:"http://129.151.101.52:8081/api/Message/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Message created",'success')
                    .then(()=>{
                        $("#newIdMessageDoctor").val("");
                        $("#newIdMessageClient").val("");
                        $("#newMessage").val("");
                        messageCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR","Incorrect data",'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateSpecialty.addEventListener("submit", e=>{
    e.preventDefault()
    if(newNameSpecialty.value.length > 1 && newDescriptionSpecialty.value.length >1){
        
        let dataCreate ={
            name:newNameSpecialty.value,
            description:newDescriptionSpecialty.value
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            url:"http://129.151.101.52:8081/api/Specialty/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Specialty "+newNameSpecialty.value+" created",'success')
                    .then(()=>{
                        $("#newNameSpecialty").val("");
                        $("#newDescriptionSpecialty").val("");
                        specialtyCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR",error.cause,'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateReservation.addEventListener("submit", e=>{
    e.preventDefault()
    if(newStartReservation.value.length > 1 && newDevolutionReservation.value.length >1 && newDoctorReservation.value>0 && newClientReservation.value>0){
        let Doctor ={
            id:parseInt(newDoctorReservation.value,10)
        }
        let Client={
            idClient:parseInt(newClientReservation.value,10)
        }

        let dataCreate ={
            startDate:newStartReservation.value,
            devolutionDate:newDevolutionReservation.value,
            client:Client,
            doctor:Doctor
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            url:"http://129.151.101.52:8081/api/Reservation/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Specialty "+newNameSpecialty.value+" created",'success')
                    .then(()=>{
                        $("#newStartReservation").val("");
                        $("#newDevolutionReservation").val("");
                        $("#newDoctorReservation").val("");
                        $("#newClientReservation").val("");
                        reservationCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                //console.log(jqXHR)
                console.log(error.state)
                swal("ERROR","Incorrect data",'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateAdministrator.addEventListener("submit", e=>{
    e.preventDefault()
    if( newPassAdmin.value.length > 1 && newNameAdmin.value.length > 1 && newEmailAdmin.value.length>1){
        let dataCreate ={
            name:newNameAdmin.value,
            email:newEmailAdmin.value,
            password:newPassAdmin.value
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Admin/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","User "+newNameClient.value+" created",'success')
                    .then(()=>{
                        $("#newPassAdmin").val("");
                        $("#newNameAdmin").val("");
                        $("#newEmailAdmin").val("");
                        administratorCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR","Incorrect values",'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

formCreateScore.addEventListener("submit", e=>{
    e.preventDefault()
    if( newNameScore.value > 0 && newCommentScore.value.length >= 0 && newReservationScore.value>0){
        let Reservation ={
            idReservation:parseInt(newReservationScore.value,10)
        }
        
        let dataCreate ={
            score:parseInt(newNameScore.value,10),
            reservation:Reservation,
            comment:newCommentScore.value
        }
        let dataCreateJson=JSON.stringify(dataCreate);
        $.ajax({
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            url:"http://129.151.101.52:8081/api/Score/save",
            type:"POST",
            data:dataCreateJson,
            datatype:"JSON",
            success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Score created",'success')
                    .then(()=>{
                        $("#newNameScore").val("");
                        $("#newCommentScore").val("");
                        $("#newReservationScore").val("");
                        scoreCRUD()      
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(jqXHR)
                console.log(error.cause)
                swal("ERROR","Incorrect values",'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
                }
        });
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })
    }
}
)

function createClient(){
    editFormClient.style.display = 'none'
    createFormClient.style.display='block'
}

function createDoctor(){
    editFormDoctor.style.display='none'
    createFormDoctor.style.display = 'block'
}

function createMessage(){
    editFormMessage.style.display='none'
    createFormMessage.style.display = 'block'
}

function createSpecialty(){
    createFormSpecialty.style.display = 'block'
}

function createReservation(){
    createFormReservation.style.display = 'block'
}

function createAdministrator(){
    createFormAdmin.style.display = 'block'
}

function createScore(){
    createFormScore.style.display='block'
}

function editClient(idClient){
    selectIdClient = idClient
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+idClient,
        url:"http://129.151.101.52:8081/api/Client/"+selectIdClient,
        type:"GET",
        datatype:"JSON",
        success:function(response){
            var clientToEdit = response
            $("#nameClient").val(clientToEdit.name)
            $("#emailClient").val(clientToEdit.email)
            $("#ageClient").val(clientToEdit.age)
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            //console.log(error.code)
            swal("ERROR","Connection error",'error')
                .then(()=>{
                    console.log("ERROR")
                })
        }
    });
    //$("#ageClient").val(idClient);
    createFormClient.style.display='none'
    editFormClient.style.display = 'block'
}

function editDoctor(idDoctor){
    console.log(idDoctor)
    selectIdDoctor = idDoctor
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor/"+idDoctor,
        url:"http://129.151.101.52:8081/api/Doctor/"+selectIdDoctor,
        type:"GET",
        datatype:"JSON",
        success:function(response){
            var doctorToEdit = response
            var idSpecialty=doctorToEdit.specialty
            $("#nameDoctor").val(doctorToEdit.name)
            $("#specialtyDoctor").val(idSpecialty.id)
            $("#graduateDoctor").val(doctorToEdit.year)
            $("#departmentDoctor").val(doctorToEdit.department)
            $("#descriptionDoctor").val(doctorToEdit.description)
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            //console.log(error.code)
            swal("ERROR","Connection error",'error')
                .then(()=>{
                    console.log("ERROR")
                })
        }
    });
    createFormDoctor.style.display='none'
    editFormDoctor.style.display = 'block'
}

function editMessage(idMessage){
    console.log(idMessage)
    selectIdMessage = idMessage
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+idMessage,
        url:"http://129.151.101.52:8081/api/Message/"+selectIdMessage,
        type:"GET",
        datatype:"JSON",
        success:function(response){
            var messageToEdit = response
            console.log(messageToEdit)
            var idDoctor = messageToEdit.doctor
            var idclient = messageToEdit.client
            $("#message").val(messageToEdit.messageText)
            $("#idDoctor").val(idDoctor.id)
            $("#idClient").val(idclient.idClient)
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            //console.log(error.code)
            swal("ERROR","Connection error",'error')
                .then(()=>{
                    console.log("ERROR")
                })
        }
    });
    createFormMessage.style.display='none'
    editFormMessage.style.display = 'block'
}

formEdit.addEventListener("submit", e=>{
    e.preventDefault()
    if( nameClient.value.length > 1 && emailClient.value.length>1 && ageClient.value > 0){
        let dataEdit ={
            idClient:parseInt(selectIdClient,10),
            name:nameClient.value,
            email:emailClient.value,
            age:parseInt(ageClient.value,10)
        }
        console.log(dataEdit)
        let dataToSend=JSON.stringify(dataEdit);
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Client/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
        success:function(response,status,xhr){
                console.log(xhr)
                console.log(status)
                console.log(response)
                swal("SUCCESSFUL OPERATION","User with id "+selectIdClient+" edited",'success')
                    .then(()=>{
                        $("#nameClient").val("");
                        $("#emailClient").val("");
                        $("#ageClient").val("");
                        clientsCRUD()
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(error.cause)
                swal("ERROR",error.cause,'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
            }
        });  
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })  
    }
}
)

formEditDoctor.addEventListener("submit", e=>{
    e.preventDefault()
    if( nameDoctor.value.length > 1 && specialtyDoctor.value >0 && graduateDoctor.value > 0){
        let Specialty={
            id:parseInt(specialtyDoctor.value,10),
        }
        let dataEditDoctor ={
            id:parseInt(selectIdDoctor,10),
            name:nameDoctor.value,
            specialty:Specialty,
            year:parseInt(graduateDoctor.value,10),
            department:departmentDoctor.value,
            description:descriptionDoctor.value
        }
        
        let dataToSendDoctor=JSON.stringify(dataEditDoctor);
        console.log(dataToSendDoctor)
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Doctor/update",
            type:"PUT",
            data:dataToSendDoctor,
            contentType:"application/JSON",
            datatype:"JSON",
        success:function(response,status,xhr){
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Doctor with id "+selectIdDoctor+" edited",'success')
                    .then(()=>{
                        $("#nameDoctor").val("");
                        $("#specialtyDoctor").val("");
                        $("#graduateDoctor").val("");
                        $("#departmentDoctor").val("");
                        doctorCRUD()
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                
                console.log(jqXHR)
                console.log(textStatus)
                console.log(errorThrown)
                swal("ERROR","Error",'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
            }
        });  
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })  
    }
}
)

formEditMessage.addEventListener("submit", e=>{
    e.preventDefault()
    if( message.value.length > 1 && idDoctor.value > 0 && idClient.value > 0){

        let Doctor ={
            id:parseInt(idDoctor.value,10)
        }
        let Client={
            idClient:parseInt(idClient.value,10)
        }
        let dataEditMessage ={
            idMessage:parseInt(selectIdMessage,10),
            messageText:message.value,
            doctor:Doctor,
            client:Client
        }
        console.log(dataEditMessage)
        let dataToSendMessage=JSON.stringify(dataEditMessage);
        $.ajax({
            //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            url:"http://129.151.101.52:8081/api/Message/update",
            type:"PUT",
            data:dataToSendMessage,
            contentType:"application/JSON",
            datatype:"JSON",
        success:function(response,status,xhr){
                console.log(dataEditMessage)
                console.log(xhr)
                swal("SUCCESSFUL OPERATION","Message with id "+selectIdMessage+" edited",'success')
                    .then(()=>{
                        $("#message").val("");
                        $("#idDoctor").val("");
                        $("#idClient").val("");
                        messageCRUD()
                })
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                var error = jqXHR.responseJSON
                console.log(error.cause)
                swal("ERROR",error.cause,'error')
                    .then(()=>{
                        console.log("ERROR")
                    })
            }
        });  
    }else{
        swal("ERROR","something is wrong",'error')
        .then(()=>{
            console.log("ERROR")
        })  
    }
}
)

function deleteClient(idClient){
    selectIdClient = idClient
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Client/" + selectIdClient,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            
            swal("SUCCESSFUL OPERATION","User with id "+selectIdClient+" deleted",'success')
                .then(()=>{
                    clientsCRUD()      
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(url)
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}

function deleteDoctor(idDoctor){
    selectIdDoctor = idDoctor
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Doctor/" + selectIdDoctor,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            swal("SUCCESSFUL OPERATION","Doctor with id "+selectIdDoctor+" deleted",'success')
                .then(()=>{
                    doctorCRUD()      
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}

function deleteMessage(idMessage){
    selectIdMessage = idMessage
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Message/" + selectIdMessage,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            swal("SUCCESSFUL OPERATION","Message with id "+selectIdMessage+" deleted",'success')
                .then(()=>{
                    messageCRUD()     
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}

function deleteSpecialty(idSpecialty){
    selectIdSpecialty = idSpecialty
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Specialty/" + selectIdSpecialty,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            
            swal("SUCCESSFUL OPERATION","User with id "+selectIdSpecialty+" deleted",'success')
                .then(()=>{
                    specialtyCRUD()      
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(url)
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}

function deleteReservation(idReservation){
    selectIdReservation = idReservation
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Reservation/" + selectIdReservation,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            
            swal("SUCCESSFUL OPERATION","User with id "+selectIdReservation+" deleted",'success')
                .then(()=>{
                    reservationCRUD()      
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(url)
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}

function deleteAdministrator(idAdmin){
    selectIdAdministrator = idAdmin
    $.ajax({
        //url:"https://g0735f73b2282bf-dbretouno.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        url:"http://129.151.101.52:8081/api/Admin/" + selectIdAdministrator,
        type:"DELETE",
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(response,status,xhr){
            console.log(xhr)
            
            swal("SUCCESSFUL OPERATION","User with id "+selectIdAdministrator+" deleted",'success')
                .then(()=>{
                    administratorCRUD()      
            })
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            var error = jqXHR.responseJSON
            console.log(url)
            console.log(error.cause)
            swal("ERROR",error.cause,'error')
                .then(()=>{
            console.log("ERROR")
    })
        }
    });
}
