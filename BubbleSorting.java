import java.util.*;

public class BubbleSorting{
 
public static void sort(int arr[]){
   for(int turns=0; turns<arr.length-1; turns++){
    for (int j=0; j<arr.length-1-turns; j++){
        
        if(arr[j]> arr[j+1]){
            int temp = arr[j]; 
             arr[j] = arr[j+1];
             arr[j+1]= temp ;
        }
    }
   }
}

public static void printarr(int arr[]){
    for (int i=0; i<arr.length ; i++){
        System.out.print( arr[i]+" ");
    }
    System.out.println();
}
    public static void main(String args[]){
      int arr[] = {3,4,5,7,2,8};

      sort(arr);
      printarr(arr );
    }
}