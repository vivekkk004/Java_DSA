public class Secondlargestarr{
    public static void main(String args[]){
        int arr[]={10,50,20,40,10};

          int max = arr[0];
              int secondmax = Integer.MIN_VALUE;


          for(int i =0; i<arr.length; i++){
            if (arr[i] > max) {
                secondmax = max;
                max = arr[i];
            } else if (arr[i] > secondmax && arr[i] != max) {
                secondmax = arr[i];
          };

          
    };
    System.out.println("Largest: " + max);
        System.out.println("Second Largest: " + secondmax);
}
}