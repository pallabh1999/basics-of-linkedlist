class Node
{
  constructor(a)
  {
    this.value = a;
    this.next = null;
  }
}
inserting_new_head = function(head,value)
{
  var new_head = new Node(value);
  new_head.next = head;
  return new_head;
}
// insertion at the end 
inserting_at_end = function(head,value)
{
  var new_end = new Node(value);
  // createa new temp
  temp=head;
  while(temp.next!=null)
  {
    temp=temp.next;
  }
  temp.next=new_end;
}

// insertion_at_the middle
// we will also be given a perticular value as n where we want to insert a nw node
insertion_at_middle = function(head,n,value)
{
  var new_mid = new Node(value)
  var temp= head;
  
  while(n-1>0)
  {
    temp=temp.next;
    n=n-1;
  }
  // we will store the after value in some variable so that at last
  // we can again connect it to our new mid
  var x = temp.next;
  temp.next = new_mid;
  new_mid.next = x;
}

// we can also print the entire linked list we havw to create 
// another function and store the head to temp and continue
display = function(head)
{
  var temp=head;
  while(temp!=null)
  {
    console.log(temp.value);
    temp=temp.next;
  }
}


head = new Node(5);
head = inserting_new_head(head,12);
inserting_at_end(head,14)
insertion_at_middle (head,2,1000000)
display(head);