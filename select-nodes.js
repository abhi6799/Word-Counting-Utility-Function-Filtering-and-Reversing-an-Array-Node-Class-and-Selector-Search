class Node {
  constructor(tag, children, classes, id) {
    this.tag = tag;
    this.children = children || [];
    this.classes = classes || [];
    this.id = id || null;
  }

  search(selector) {
    if (selector == null) {
      throw new Error('Selector cannot be null or undefined');
    }

    let results = [];

    if (matchesSelector(this, selector)) {
      results.push(this);
    }

    for (let child of this.children) {
      results.push(...child.search(selector));
    }

    return results;
  }
}

function matchesSelector(node, selector) {
  if (typeof selector !== 'string') {
    throw new Error('Selector argument must be a string.');
  }
  if (selector == null) {
    throw new Error('Selector cannot be null or undefined');
  }
  let parts = selector.split(/([.#])/);
  let tagName = parts[0];
  let classes = [];
  let id = null;

  for (let i = 1; i < parts.length; i += 2) {
    let type = parts[i];
    let value = parts[i + 1];

    if (type === '.') {
      classes.push(value);
    } else if (type === '#') {
      id = value;
    }
  }

  if (tagName && node.tag !== tagName) {
    return false;
  }

  for (let className of classes) {
    if (!node.classes.includes(className)) {
      return false;
    }
  }

  if (id && node.id !== id) {
    return false;
  }

  return true;
}

// create the DOM tree
const tree = new Node('body', [
  new Node('div', [
    new Node('span', [], ['note'], 'span-1'),
    new Node('span', [], [], 'span-2'),
    new Node('div', [
      new Node('p', [], ['sub1-p1', 'note'], 'para-1'),
      new Node('span', [], ['sub1-span3'], 'span-3')
    ], ['subContainer1'], 'div-2'),
    new Node('div', [
      new Node('section', [
        new Node('label', [], [], 'lbl-1')
      ], [], 'sec-1')
    ], ['subContainer2'], 'div-3'),
    new Node('div', [
      new Node('span', [], ['mania'], 'span-4'),
      new Node('span', [], ['note', 'mania'], 'span-5')
    ], [], 'div-4')
  ], ['mainContainer'], 'div-1'),
  new Node('span', [], ['randomSpan'], 'span-6')
], [], 'content');

const divNode1 = tree.children[0];

// Test1
console.log("Test 1: find all descendant <span> elements of divNode1");
const spanNodes = divNode1.search('span');
console.log(spanNodes);

// Test2
console.log("\nTest 2: find all nodes with the class 'note' as descendants of divNode1");
const noteNodes = divNode1.search('.note');
console.log(noteNodes);

// Test3
console.log("\nTest 3: find all <label> elements as descendants of divNode1");
const labelNodes = divNode1.search('label');
console.log(labelNodes);

// Test4
console.log("\nTest 4: find all nodes with the class 'note' as descendants of p1");
const p1 = divNode1.children[2].children[0];
const noteNodesP1 = p1.search('.note');
console.log(noteNodesP1);

// Test5
console.log("\nTest 5: find all <div> elements as descendants of divNode1");
const divNodes1 = divNode1.search('div');
console.log(divNodes1);

// Test6
console.log("\nTest 6: find all <div> elements as descendants of divNode1");
const divNodes2 = divNode1.search('div');
console.log(divNodes2);

// Test7
console.log("\nTest 7: find all <section> elements as descendants of divNode2");
const divNode2 = tree.children[0].children[2];
const sectionNodes = divNode2.search("section");
console.log(sectionNodes);

// Test8
console.log("\nTest 8: Error - search() called without a selector");
try {
  console.log(divNode1.search());
} catch (error) {
  console.error(error.message);
}

// Test9
console.log("\nTest 9: No matching elements for the selector 'section'");
const noMatch = divNode1.search("section");
console.log(noMatch);

// Test10
console.log("\nTest 10: find all nodes with the class 'randomSpan' as descendants of divNode1");
const randomSpanNodes = divNode1.search(".randomSpan");
console.log(randomSpanNodes);
