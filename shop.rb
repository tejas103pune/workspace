class ShopDetails
    def create_order
        puts "Create new order"
        option1 = gets.chomp.split.join('-')
        puts "Enter orders"
        order = gets.chomp.to_i
        arr << option1
        arr << order
        print arr
    end
end
shop = ShopDetails.new
puts "enter the options 1,2,3"
puts "1 : create new order"
puts "2 : print day details"
puts "3 : print month details"
opt = gets.chomp.to_i
case opt
when 1
    shop.create_order
when 2
    shop.print_day_details
when 3
    shop.print_month_details
else
    puts "enter valid option"
end

# if opt == 1
#     shop.create_order
# elsif opt == 2
#     shop.print_day_details
# else  
#     shop.print_month_details 
# end