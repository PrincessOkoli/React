import  {useEffect} from 'react'


//custom hooks
function useDocumentTitle(count) {
   useEffect(() => {
     document.title = `count ${count}`;
   }, [count]);
}

export default useDocumentTitle