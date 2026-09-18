public class LeadersInAnArray{
    public static void main(String args[]){
        int arr[] ={12,3,27,4,9,2,0,7};

        int max = Integer.MIN_VALUE;


        for(int i=arr.length-1;i>=0;i--){
           if(arr[i]>max){
            max = arr[i];
            System.out.print(arr[i]+" ,");
           }
        }
       
    }
}