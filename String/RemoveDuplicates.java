public class RemoveDuplicates{
    public static void main(String args[]){
        int arr [] = { 23,4,2,2,4,5,5,};
           
           for(int i =0; i<arr.length; i++){

            boolean Duplicate = false;

            for( int j =0 ; j<i; j++){
                if(arr[i]== arr[j]){
                   Duplicate = true;
                 break;
                }
                 
            }
            if(!Duplicate){
                System.out.print(arr[i]);
            }
            
           }
          
    }
}