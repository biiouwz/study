// hash_chaining

#include <stdio.h>
#include <stdlib.h>

int hash(int key) { return key % 11; }
#define TABLE_SIZE 11

struct Node {
  int key;
  struct Node *next;
};

struct Node *table[TABLE_SIZE];

void initTable() {
  for (int i = 0; i < TABLE_SIZE; i++) {
    table[i] = NULL;
  }
}

void insert(int key) {
  int index = hash(key);
  struct Node *newNode = malloc(sizeof(struct Node));
  newNode->key = key;
  (*newNode).next = table[index];
  table[index] = newNode;
}

struct Node *search(int key) {
  int index = hash(key);
  struct Node *current = table[index];
  while (current != NULL) {
    if (current->key == key) {
      return current;
    }
    current = current->next;
  }
  return NULL;
}

void delete(int key) {
  int index = hash(key);
  struct Node *current = table[index];
  struct Node *prev = NULL;
  while (current != NULL && current->key != key) {
    prev = current;
    current = current->next;
  }
  if (current == NULL) {
    return;
  }
  if (prev == NULL) {
    table[index] = current->next;
  } else {
    prev->next = current->next;
  }
  free(current);
}

void freeTable() {
  for (int i = 0; i < TABLE_SIZE; i++) {
    struct Node *current = table[i];
    while (current != NULL) {
      struct Node *temp = current;
      current = current->next;
      free(temp);
    }
    table[i] = NULL;
  }
}

void printTable() {
  for (int i = 0; i < TABLE_SIZE; i++) {
    printf("[%d] -> ", i);
    struct Node *current = table[i];
    while (current != NULL) {
      printf("%d -> ", current->key);
      current = current->next;
    }
    printf("NULL\n");
  }
}

int main() {
  initTable();

  for (int i = 10; i < 22; i++) {
    insert(i);
  }
  insert(35);
  insert(24);

  printf("=== After Insert ===\n");
  printTable();

  struct Node *result = search(32);
  if (result != NULL) {
    printf("Found: %d\n", result->key);
  } else {
    printf("Not Found\n");
  }
  struct Node *find = search(13);
  if (result != NULL) {
    printf("Found: %d\n", find->key);
  } else {
    printf("Not Found\n");
  }

  delete(11);
  delete(35);

  printf("=== After Delete ===\n");
  printTable();

  delete(33);
  printTable();

  printf("=== Free Table ===\n");
  freeTable();
  printTable();
}