
import java.util.*
import kotlin.concurrent.schedule

fun timerOneSecond(target:Int, _seconds:Int) {
    var seconds = _seconds
    Timer().schedule(1000){
        seconds += 1
        println(seconds)
        if (seconds >= target) {
            println("*****************")
            println("$seconds s finish")
            println("*****************")
        } else {
            timerOneSecond(target, seconds);
        }
    }
}

/**
    @parameter arg0 : the number of second to wait
 */
fun main(args: Array<String>) {
    if (args.size == 0) {
        println("Timer can't be used like that !!!")
        println("Usage : ")
        println(" * arg[0] : number of second of the timer")
        return
    }
    val target = args[0].toInt()
    if (target > 0) {
        timerOneSecond(target, 0)
    }
}
