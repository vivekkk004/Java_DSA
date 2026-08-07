public class LargenumArr{

  public static void main(String args[]){
    int arr[] ={7,8,9,4,6,5};
  int largest = Integer.MIN_VALUE;
  int secondlargest = Integer.MIN_VALUE;

  for(int i=0; i<arr.length; i++){
    if(arr[i]>largest){
       secondlargest = largest;
      largest = arr[i];
    }else if( arr[i]<secondlargest && arr[i]!=largest){
      secondlargest = arr[i];
    }
 
  }
  System.out.println("Largest = "+largest);
 System.out.println("Second Largest = " + secondlargest);
  }

}
