public class CountallDigits{
    public static void main(String[] args ){
       int n = 347;
        int cnt =0;

        while(n>0){
            int lastdigit = n % 10;
            cnt = cnt+1;
            n = n/10 ;
     
        }
        System.out.print(cnt);
    }
}