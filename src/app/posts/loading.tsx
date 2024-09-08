export default function Loading() {
  return (
    <main className="flex items-center justify-center">
      <div>loading....</div>
    </main>
  );
}
/* while loading by default this page is seen since it is in the same directory 
but  even title of the page is not seen so we can use suspese to overcome this issue.
after implementing we dont need this page thanks to the suspense */
