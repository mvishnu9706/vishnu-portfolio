
import 'flowbite';
import '../css/style.css';
import './themeToggle';
import './qualification';
import './recentWorks';
import './headerTags';

const tags = [
  {
    icon: '<i class="fa-solid fa-desktop fa-sm mr-1 text-blue-700"></i>',
    name: 'Web Developer'
  },
  {
    icon: '<i class="fa-solid fa-code fa-sm mr-1 text-blue-400"></i>',
    name: 'React Developer'
  },
  {
    icon: '<i class="fa-solid fa-code fa-sm mr-1 text-green-600"></i>',
    name: 'Node.js'
  },
  {
    icon: '<i class="fa-solid fa-terminal fa-sm mr-1 text-orange-500"></i>',
    name: 'Java Full Stack'
  },
  {
    icon: '<i class="fa-brands fa-aws fa-sm mr-1 text-orange-500"></i>',
    name: 'AWS'
  },
  {
    icon: '<i class="fa-solid fa-people-group fa-sm mr-1 text-green-500"></i>',
    name: 'Collaborate'
  }
];

const parent = document.getElementById('header-tags');

if (parent) {
  parent.innerHTML = tags.map(tag => `
    <span class="inline-flex items-center text-gray-900 bg-gray-100
      border border-gray-100 font-medium rounded-full text-sm
      px-4 py-3 mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200
      dark:border-gray-800">
      ${tag.icon}
      ${tag.name}
    </span>
  `).join('');
}
