public class MergeArray{
    public static void main(String[] args ){
        int arr1[] = {1,2,3,3,4,};
        int arr2[] = {5,6,7,8};

        int Merge[] = new int [arr1.length + arr2.length];

        int index = 0; 

         for (int i = 0; i < arr1.length; i++) {
            Merge[index] = arr1[i];
            index++;
        }
         for(int i =0;  i<arr2.length; i++){
             Merge[index] = arr2[i];
             index++;
         }
         for(int i=0; i<Merge.length; i++){
          System.out.print(Merge[i] + " ");
         }
    }
}