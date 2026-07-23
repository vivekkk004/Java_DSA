public class LinearSearch{
    public static void main(String args[]){
        int arr[] ={2,4,5,8,9};
         int target = 5;

        for(int i=0; i<arr.length; i++ ){
            if(arr[i] == target){
                System.out.print(i);
            }
            
        }
       
            
    }
}