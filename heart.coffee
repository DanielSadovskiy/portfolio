renderNodes = (i) ->
    node = paper.circle pos[i].x,pos[i].y, 10
    node.attr
        fill: '#fff'

drawPath = (i) ->
    path = paper
        .path "M #{pos[i].x} #{pos[i].y}"
        .attr
            fill:"transparent"
            stroke:"#fff"
            strokeWidth:1
        .animate {d: "M #{pos[i].x} #{pos[i].y} L #{pos[i+1].x} #{pos[i+1].y} " },1000,mina.easeInOut,->
            renderNodes(i)
            drawPath(i+1)
        .animate { stroke:'#c22085'},500
pos = [
    {
        x:9
        y:67
    }
    {
        x:148
        y:194
    }
    {
        x:170
        y:220
    }

]

paper = Snap '#love-js'
drawPath(0)