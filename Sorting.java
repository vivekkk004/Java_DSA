import java.util.*;

public class Sorting{
 
public static void BubbleSorting(int arr[]){
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


// Selection sort

public static void SelectionSort(int arr[]){
    for(int i=0; i<arr.length-1; i++){
        int minPos = i;
        for(int j=i+1; j<arr.length; j++){
            if(arr[minPos]> arr[j]){
                minPos = j ;
            }
        }
        // swap
        int temp = arr[minPos];
        arr[minPos] = arr[i];
        arr[i] =temp;
    }
}

// Insertion Sort 

public static void InsertionSort(int arr[]) {
    for (int i = 1; i < arr.length; i++) {
        int curr = arr[i];
        int prev = i - 1;

        // Finding correct position to insert
        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }

        // Insertion
        arr[prev + 1] = curr;
    }
}
    public static void main(String args[]){
      int arr[] = {3,4,5,7,2,8};

    //   BubbleSorting(arr);
    // SelectionSort(arr);
     InsertionSort(arr);
      printarr(arr );
    }
}
