var vehicle = ["select vehicle","Maruthi","Ford","Benz"];
var maruthi = ["maruthi 800","Ritz","Baleno"];
var ford = ["ford1","ford2","ford3"];
var benz = ["benz1","benz2","benz3"];

function getOption(select,option){
    var obj = document.createElement("option"); //<option></option>
        obj.text = option; //<option value>select state</option>
        obj.value = option;
        select.options.add(obj);
}

function getVehicle(){
    // alert("alert")

    for(i=0;i<vehicle.length;i++){
        getOption( document.getElementById("vehicle"),vehicle[i]);
    }
}

function getModels(vehicle){
    document.getElementById("models").options.length  = 1;
    if(vehicle == 'select vehicle'){
        document.getElementById("models").style.display = 'none';
        alert("PLease select any vehicle")
    }else{
        document.getElementById("models").style.display = '';
    }
    if(vehicle == 'Maruthi'){
        for(i=0;i<maruthi.length;i++){
            getOption( document.getElementById("models"),maruthi[i]);
        }
    }
    if(vehicle == 'Ford'){
        for(i=0;i<ford.length;i++){
            getOption( document.getElementById("models"),ford[i]);
        }
    }
}