// Scholarship Distribution Greedy
import java.util.*;

public class Solution1  {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        long B = sc.nextLong();

        int[] scholarship = new int[N];

        for (int i = 0; i < N; i++) {
            scholarship[i] = sc.nextInt();
        }

        Arrays.sort(scholarship);

        int count = 0;

        for (int i = 0; i < N; i++) {
            if (B >= scholarship[i]) {
                B -= scholarship[i];
                count++;
            } else {
                break;
            }
        }

        System.out.println(count);

        sc.close();
    }
}