//Rearrange Array Elements by Sign

public class RearrangeArr{

    public static void main(String args[]){
          
          int arr[] = {3,5,-4,-7,2,-8};
          
          int n = arr.length;
         int[] ans = new int[n];

           int posIndex =0;
           int negIndex =1;

        for (int i =0; i<arr.length ;i++){
              if(arr[i] < 0){
            ans[negIndex] = arr[i];
            negIndex += 2;
           }else{
            ans[posIndex] = arr[i];
            posIndex += 2 ;
           }
        }
        for(int i =0; i<arr.length; i++){
         System.out.print(ans[i] +" ");
        };
    }
   
};