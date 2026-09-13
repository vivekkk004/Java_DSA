import java.util.ArrayList;

public class Unionoftwosortedarrays {
    public static void main(String args[]) {

        int num1[] = {3, 4, 6, 7, 9, 9};
        int num2[] = {1, 5, 7, 8, 8};

        int a = num1.length;
        int b = num2.length;

        int i = 0;
        int j = 0;

        ArrayList<Integer> unionarr = new ArrayList<>();

        while (i < a && j < b) {

            if (num1[i] < num2[j]) {

                if (unionarr.size() == 0 ||
                    unionarr.get(unionarr.size() - 1) != num1[i]) {

                    unionarr.add(num1[i]);
                }

                i++;

            } else {

                if (unionarr.size() == 0 ||
                    unionarr.get(unionarr.size() - 1) != num2[j]) {

                    unionarr.add(num2[j]);
                }

                j++;
            }
        }

        // Remaining elements of num2
        while (j < b) {

            if (unionarr.size() == 0 ||
                unionarr.get(unionarr.size() - 1) != num2[j]) {

                unionarr.add(num2[j]);
            }

            j++;
        }

        // Remaining elements of num1
        while (i < a) {

            if (unionarr.size() == 0 ||
                unionarr.get(unionarr.size() - 1) != num1[i]) {

                unionarr.add(num1[i]);
            }

            i++;
        }

        System.out.println(unionarr);
    }
}