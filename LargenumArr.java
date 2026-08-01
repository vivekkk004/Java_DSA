public class LargenumArr{

  public static void main(String args[]){
    int arr[] ={7,8,9,4,6,5};
  int largest = arr[0];

  for(int i=0; i<arr.length; i++){
    if(arr[i]>largest){
      largest = arr[i];
    }
 
  }
     System.out.print(largest);
  }

}
