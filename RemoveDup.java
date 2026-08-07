public class RemoveDup {
       
    public static int removeD(int arr[]) {

       int i = 0;

       for(int j=1; j<arr.length; j++){
        if(arr[j]!= arr[i]){
            arr[i+1]= arr[j];
            i++;
        }
       }
       return(i+1);
    }
    
    public static void main(String[] args) {

        int[] arr = {1, 1, 2, 2, 3, 4, 4,5,6};
          int lenght = removeD(arr);
        System.out.println("lenght :"+ lenght);

        for(int i =0; i<lenght;i++){
          System.out.print(arr[i]+" ");
        }
     
    }
}