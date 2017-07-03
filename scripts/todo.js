var btn = document.getElementById('btn');
btn.onclick = add;

function add() {
  var list = document.getElementById('task_list');
  var task = document.getElementById('task_description').value;
  var assignee1TaskCount = 0;
  var assignee2TaskCount = 0;
  var assignee3TaskCount = 0;
  var assignee4TaskCount = 0;
  var assignee5TaskCount = 0;

  var assignee = '';
  if(document.getElementById('task_assignee1').checked) {
    var assignee = document.getElementById('task_assignee1').value;
    var assignee1TaskCount = assignee1TaskCount + 1;
  }else if(document.getElementById('task_assignee2').checked) {
    var assignee = document.getElementById('task_assignee2').value;
    var assignee2TaskCount = assignee2TaskCount + 1;
  }else if(document.getElementById('task_assignee3').checked) {
    var assignee = document.getElementById('task_assignee3').value;
    var assignee3TaskCount = assignee3TaskCount + 1;
  }else if(document.getElementById('task_assignee4').checked) {
    var assignee = document.getElementById('task_assignee4').value;
    var assignee4TaskCount = assignee4TaskCount + 1;
  }else if(document.getElementById('task_assignee5').checked) {
    var assignee = document.getElementById('task_assignee5').value;
    var assignee5TaskCount = assignee5TaskCount + 1;
  }

  var difficulty = document.getElementById('task_difficulty').value;

  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(assignee + " -- " + task + " (Difficulty: " + difficulty + ")"));
  list.appendChild(entry);
  document.getElementById('task_description').value="";
  document.getElementById('task_assignee').reset();
  document.getElementById('task_difficulty').value = Easy;

}
