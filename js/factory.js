app.factory("myfactory",()=>{
    var object = {
        taskArray:[],
        id:1,
        addTask(name,desc){
        var task = new Task(this.id,name,desc);
        this.taskArray.push(task);
        this.id++;
//      console.log(this.taskArray);
    },
        deleteTask(){
            this.taskArray= this.taskArray.filter((x)=>{
                return !x.markForDeletion;
            });
        },
        searchRecord(name){
            return this.taskArray.filter((x)=>{
               return (x.name==name);
            });
        },
        receiveValue(){
           var obj = this.taskArray.filter((x)=>{
                return x.markForEdit;
            })[0];
            console.log(obj);
            return obj;
            
           
        },
        updateRecord(name,desc,obj){
            obj.markForEdit=false;
            obj.name = name;
            obj.desc = desc;
            this.taskArray[obj.id-1] = obj;
        },
        selectedFields(){
            var obj = this.taskArray.filter((x)=>{
                return x.markForDeletion || x.markForEdit;
            });
            return obj.length;
        },
        unselectedField(){
            return this.taskArray.length - this.selectedFields();
        }
    };
            return object;
});


