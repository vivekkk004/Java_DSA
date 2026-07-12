public class Secondlargestarr {
    public static void main(String args[]) {

        int arr[] = {10, 50, 20, 40, 10};

        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        int thirdMax = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] > max) {
                
                secondMax = max;
                max = arr[i];

            } else if (arr[i] > secondMax && arr[i] != max) {
                 thirdMax = secondMax;
                secondMax = arr[i];

            } else if (arr[i] > thirdMax &&
                       arr[i] != secondMax &&
                       arr[i] != max) {
                thirdMax = arr[i];
            }
        }

        System.out.println("Largest: " + max);
        System.out.println("Second Largest: " + secondMax);
        System.out.println("Third Largest: " + thirdMax);
    }
}