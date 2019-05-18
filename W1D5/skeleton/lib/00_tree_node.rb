require 'byebug'
class PolyTreeNode
  attr_accessor :value, :parent, :children
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent_assignment_helper(parent_node)
    @parent = parent_node 
    if parent_node #Checking if Root
      unless parent_node.children.include?(self)
        parent_node.children.push(self)
      end
    end
  end 
  
  def parent=(parent_node)
    if @parent
      (self.parent).children.delete(self) #OLD DAD DOESNT LOVE YOU
      parent_assignment_helper(parent_node) #ADD NEW DAD
    else
      parent_assignment_helper(parent_node)
    end
  end

  def add_child(child_node)
    if child_node
      child_node.parent = self
      @children.push(child_node) unless @children.include?(child_node)
    end
  end 

  def remove_child(child_node)
    if self.children.include?(child_node)
      if child_node
        child_node.parent=nil
        @children.delete(child_node)
      end 
    else 
      raise "This is not my child"
    end 
    
  end 

  def dfs(target_value)
    if self.value == target_value
      return self 
    end

    self.children.each do |child|
      result = child.dfs(target_value)
      return result if result
    end
    nil 
  end 

  def bfs(target_value)
    queue = []
    queue.push(self)

    until queue.empty?
      current_node = queue.shift
      return current_node if current_node.value == target_value
      current_node.children.each do |child|
        queue.push(child)
      end
    end
    nil
  end

end