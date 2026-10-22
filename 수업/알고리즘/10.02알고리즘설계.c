// #include <stdio.h>

// void insertionSort(int arr[], int n){
//     for (int i=0; i<n; i++){
//         int key = arr[i];
//         int j=i-1;

//         while (arr[j]>key && j>=0){
//             arr[j+1] = arr[j];
//             j-=1;
//         }
//         arr[j+1]=key;
//     }
// }

// int main(){
//     int arr[] = {8,3,5,1,6};
//     int n=5;
//     insertionSort(arr,n);
//     for (int i=0; i<n; i++){
//         printf("%d ", arr[i]);
//     }
//     return 0;
// }

// #include <stdio.h>

// void found(int arr[], int n, int target){
//     for (int i=0; i<n; i++){
//         if (target == arr[i]){
//             printf("발견");
//             return arr[i];
//         }
//     }
// }
#include <stdio.h>
#include <stdlib.h>

void insertion_sort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

int binary_search(int arr[], int n, int target) {
  int left = 0;
  int right = n - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
      return 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

int main() {
  int n, m;
  if (scanf("%d", &n) != 1)
    return 0;
  int *books = (int *)malloc(sizeof(int) * n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &books[i]);
  }
  insertion_sort(books, n);
  if (scanf("%d", &m) != 1)
    return 0;
  for (int i = 0; i < m; i++) {
    int query;
    scanf("%d", &query);
    printf("%d ", binary_search(books, n, query));
  }
  printf("\n");
  free(books);
  return 0;
}