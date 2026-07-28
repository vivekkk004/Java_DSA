public class ArmstrongNum{
    public static void main(String args[]){
        int n = 153;

        System.out.print(n + " is ");
        int sum =0;
        int dup =n ;

        while(n>0){
            int LD = n%10;
            sum = sum + (LD*LD*LD);
            n = n/10;
        }
        if(sum == dup){
            System.out.print("Armstrong Num");
        }else{
            System.out.print("not a Armstrong Num");
        }
    }
}
// 