<template>
<v-app id="inspire">
   <v-form
   ref="form"
    
   >
      <v-container>
        <v-row>
  
          <v-col cols="12" sm="6">
            <v-text-field
            v-model="temparray"
              label="Enter the numbers"
              outlined
              placeholder="Eg:=5,4,6,7,8"
            ></v-text-field>
          
          </v-col>
          
        </v-row>
        
        
      </v-container>
    </v-form>
    <div v-if="temparray.length">
    <h3>Entered values:-{{temparray}}</h3>
  
    <h5>Now click on the following sorting algorithms:-</h5>
    <v-btn @click="quicksort()">Quick sort</v-btn>
    <div v-html="solution">

    </div>
    </div>
</v-app>

</template>

<script>
export default {
  data(){
    return{
    inputval:'',
    arrayinputs:'',
    temparray:'',
    newarray:[],
    origArray:'',
    solution:'',
    results:'',
    quicksortclick:null
    }
  },
  created(){
    this.quicksort();
  },
  methods:{
    
    quicksort(){
      this.quicksortclick = true;
      var items = new Array();
      items = this.temparray.split(",").map(Number);
      console.log(items.length);        


      var answers;
        function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;

                console.log(leftIndex,rightIndex);

      answers = answers+"<caption>"+items+"</caption>";

      }
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
        
        answers =answers+"<hr><h5>Pivot:-"+pivot+" | i pointer:-"+i+" | j pointer:-"+j+"</h5>" ;
      

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
            answers = answers+ "<p>value of "+items[i]+" is greater than "+pivot+" so i++</p> ";
            answers = answers+"<p>i:- "+i+" j:-"+j+"</p>";

        }
        while (items[j] > pivot) {
            j--;
            answers = answers+ "<p>value of "+items[i]+" is less than "+pivot+" so j--</p>";
            answers = answers+"<p>i:- "+i+" j:-"+j+"</p>";


        }
        if (i <= j) {
            
            answers = answers + "<p>j value:- "+j+" exceeds or equals pivot index value  so swap</p>"

            swap(items, i, j); //sawpping two elements
            i++;
            j--;
            
        }
                    console.log(items);

    }
        //console.log(pivot);


    return i;
}

function quick_Sort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quick_Sort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quick_Sort(items, index, right);
        }
    }
    return items;
}
var sortedArray = quick_Sort(items, 0, items.length - 1);
//console.log(sortedArray);
      answers = answers + "<h2>Ans:-"+sortedArray+"</h2>";
      this.solution = answers;
    }
    

  }
}

</script>