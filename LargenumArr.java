public class LargenumArr{
    public static int getlarge(int arr[]){
     int lagrest = Integer.MIN_VALUE;// - INFINITY
     int Smallest =  Integer.MAX_VALUE;


     for (int i=0; i<arr.length; i++){
       if(lagrest< arr[i]) {
        lagrest = arr[i];
       }
       if(Smallest > arr[i]){
        Smallest = arr[i];
       }
     }
      System.out.println("smallest value is "+ Smallest);
    return lagrest;
    }
        public static void main(String args[]) {
     int arr[]= {6,10,44,56 ,4};
     
     System.out.print("Lagre value is "+ getlarge(arr));

    }
} 