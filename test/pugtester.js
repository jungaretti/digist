const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('views/snippet.pug');

// Render a set of data
console.log(compiledFunction({
    url: "https://www.github.com",
    slice: {
        name: 'hello_world.rb'
    },
    files: [{
        name: 'hello_world.rb',
        content: 'class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi',
        iconURL: 'https://raw.githubusercontent.com/jesseweed/seti-ui/master/icons/ruby.svg'
    }, {
        name: 'hello_world.py',
        content: 'class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()',
        iconURL: 'https://raw.githubusercontent.com/jesseweed/seti-ui/master/icons/ruby.svg'
    }]
}));
