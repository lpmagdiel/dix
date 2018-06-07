function dataNic(){
    var TABLE = [];
    if(localStorage.getItem("dataNic")){
        TABLE = JSON.parse(localStorage.getItem("dataNic"));
    }
    return{
        create : function(name){
            if(TABLE.length > 0){
                for(var i in TABLE){
                    if(TABLE[i].nameTable == name){
                        console.warn(`La tabla ${name} ya existe`);
                    }
                    else{
                        TABLE.push({nameTable:name,data:[]});
                    }
                }
            }
            else{
                TABLE.push({nameTable:name,data:[]});
            }
        },
        save : function(name,dt){
            var ok = false;
            if(TABLE.length > 0){
                for(var i in TABLE){
                    if(TABLE[i].nameTable == name){
                        TABLE[i].data.push(dt);
                        localStorage.setItem("dataNic",JSON.stringify(TABLE));
                        ok = true;
                    }
                }
            }
            else{
                console.warn(`La tabla ${name} no existe`);
            }
            return(ok);
        },
        getAll : function(){
            return(TABLE);
        },
        getTable : function(name){
            if(TABLE.length > 0){
                for(var i in TABLE){
                    if(TABLE[i].nameTable == name){
                        return(TABLE[i].data);
                    }
                }
            }
        },
        update : function(name,index,newData){
            var ok = false;
            if(TABLE.length > 0){
                for(var i in TABLE){
                    if(TABLE[i].nameTable == name){
                        TABLE[i].data[id] = newData;
                        //localStorage.setItem("dataNic",JSON.stringify(TABLE));
                        ok = true;
                    }
                }
            }
            else{
                console.warn(`La tabla ${name} no existe`);
            }
            return(ok);
        },
        deleteTable : function(name){
            var ok = false;
            if(TABLE.length > 0){
                if(TABLE.indexOf(name) != -1){
                    TABLE.splice(TABLE.indexOf(name),1);
                }

            }
            else{
                console.warn(`La tabla ${name} no existe`);
            }
            return(ok);
        }
    }
}