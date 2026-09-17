public class ArrFrequency{
    public static void main(String args[]){ 

        int arr[] ={2,3,5,3,5,6,9,2,1,6,8};
      
         int  count ;

        for(int i=0 ; i<arr.length; i++){
         count =0;
         for(int j =0; j<arr.length; j++){
               if ( arr[i] == arr[j]){   
              count++; 
               }
         }
    System.out.println(arr[i]+"=>"+count);
        
            }
         
        }
           
    
}