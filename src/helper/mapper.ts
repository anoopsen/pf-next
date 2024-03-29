import {getElement} from '@/helper/getEelement'

export const mapper = (cn:string, cb:any) => {
    function handleScroll() {
      const element = getElement(cn);
      var scroll_position = window.scrollY;
      var document_height = document.documentElement.scrollHeight - window.innerHeight;
      var window_width = window.innerWidth;
      var card_width = element.offsetWidth;
      var max_left_position = window_width - card_width-20;
      var object_position = (max_left_position * scroll_position) / document_height;
      var rotation_degrees = (scroll_position / document_height) * 360;
      cb(object_position, rotation_degrees)  //document.getElementById(cn).style.left = object_position + 'px';
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  